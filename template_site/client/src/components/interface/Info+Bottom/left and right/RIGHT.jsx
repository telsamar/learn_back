import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { 
    API_deleteMessage, 
    API_insertMessage, 
    API_updateMessage 
} from 'path_services/api';

import { 
    act_openInsertModal, 
    act_closeInsertModal, 
    act_openEditModal, 
    act_closeEditModal, 
    act_setMessageText, 
    act_clearMessageText 
} from 'path_store/interface/actions';

function RIGHT(props) {
    const handleChange = (e) => {
        props.setMessage(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Добавлено сообщение', props.messageText);
        API_insertMessage(props.messageText);
        props.clearMessage();
        props.closeModal();
    };
    
    const click_openEditModal = () => {
        props.setMessage(props.current_message);
        props.openEditModal();
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        API_updateMessage(props.current_id, props.messageText);
        console.log(`Обновляем сообщение с ID ${props.current_id}: ${props.messageText}`);
        props.clearMessage();
        props.closeEditModal();
    };

    const handlerClick_delete = (id) => {
        console.log(`Удаляем с ID ${id}`);
        API_deleteMessage(id);
    };

    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            {props.messages && props.messages.length > 0 ? (
                <>
                    <Modal show={(props.insertModalOpen)} onHide={(props.closeModal)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Добавить сообщение</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="messageText">
                                        <Form.Control type="text" value={props.messageText} onChange={handleChange} placeholder="Введите ваше сообщение" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Отправить
                                    </Button>
                                </Form>
                            </Modal.Body>
                    </Modal>

                    <Modal show={props.editModalOpen} onHide={props.closeEditModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Изменить сообщение</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleUpdate}>
                                    <Form.Group controlId="editMessageText">
                                        <Form.Label>ID: {props.current_id}</Form.Label>
                                        <Form.Control type="text" value={props.messageText} onChange={handleChange} placeholder="Измените ваше сообщение" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Обновить</Button>
                                </Form>
                            </Modal.Body>
                    </Modal>
                    
                    <div>
                        <p>{props.current_message || "Выберите кнопку"}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="primary" onClick={props.openModal}>Добавить</Button>
                        <Button variant="primary" onClick={click_openEditModal}>Изменить</Button>
                        <Button variant="primary" onClick={() => handlerClick_delete(props.current_id)}>Удалить</Button>
                    </div>
                </>
            ) : (
                <div>
                    <p>Сервер недоступен. Пожалуйста, попробуйте позже.</p>
                </div>
            )}
        </div>
    );
}




//props
const mapStateToProps = (state) => {
    return {
        current_message: state.allData.current_message,
        current_id: state.allData.current_id,
        messages: state.allData.messages,
        
        insertModalOpen: state.allInterface.insertModalOpen,
        editModalOpen: state.allInterface.editModalOpen,
        messageText: state.allInterface.messageText
    }
}

//reducers
const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(act_openInsertModal()),
        closeModal: () => dispatch(act_closeInsertModal()),
        openEditModal: () => dispatch(act_openEditModal()),
        closeEditModal: () => dispatch(act_closeEditModal()),
        setMessage: (text) => dispatch(act_setMessageText(text)),
        clearMessage: () => dispatch(act_clearMessageText()),
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(RIGHT); 