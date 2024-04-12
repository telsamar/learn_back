import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { API_deleteMessage, API_insertMessage, API_updateMessage } from 'path_services/api';

function RIGHT(props) {
    // insert
    const [insertModalOpen, setInsertModalOpen] = useState(false);
    const [messageText, setMessageText] = useState('');
    
    const openInsertModal = () => setInsertModalOpen(true);
    const closeInsertModal = () => setInsertModalOpen(false);

    const handleChange = (e) => {
        setMessageText(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Добавлено сообщение', messageText);
        API_insertMessage(messageText);
        setMessageText('');
        closeInsertModal();
    };
    
    // update
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editId, setEditId] = useState(null);

    const openEditModal = () => {
        setEditId(props.current_id);
        setMessageText(props.current_message);
        setEditModalOpen(true);
    };

    const closeEditModal = () => setEditModalOpen(false);

    const handleUpdate = (event) => {
        event.preventDefault();
        API_updateMessage(editId, messageText)
        console.log(`Обновляем сообщение с ID ${editId}: ${messageText}`);
        setMessageText('');
        setEditId(null);
        closeEditModal();
    };

    const handlerClick_delete = (id) => {
        console.log(`Удаляем с ID ${id}`);
        API_deleteMessage(id);
    }

    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            {props.messages && props.messages.length > 0 ? (
                <>
                    <Modal show={insertModalOpen} onHide={closeInsertModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Добавить сообщение</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="messageText">
                                        <Form.Control type="text" value={messageText} onChange={handleChange} placeholder="Введите ваше сообщение" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Отправить
                                    </Button>
                                </Form>
                            </Modal.Body>
                    </Modal>

                    <Modal show={editModalOpen} onHide={closeEditModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Изменить сообщение</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleUpdate}>
                                    <Form.Group controlId="editMessageText">
                                        <Form.Label>ID: {editId}</Form.Label>
                                        <Form.Control type="text" value={messageText} onChange={handleChange} placeholder="Измените ваше сообщение" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Обновить</Button>
                                </Form>
                            </Modal.Body>
                    </Modal>
                    
                    <div>
                        <p>{props.current_message || "Выберите кнопку"}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="primary" onClick={openInsertModal}>Добавить</Button>
                        <Button variant="primary" onClick={openEditModal}>Изменить</Button>
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
        current_message: state.allData.data.current_message,
        current_id: state.allData.data.current_id,
        messages: state.allData.data.messages,
    }
}

//reducers
const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(RIGHT); 