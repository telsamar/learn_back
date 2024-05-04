CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL
);

INSERT INTO messages (message) VALUES
('message 1'),
('message 22'),
('message 333'),
('message 4444'),
('message 55555'),
('message 666666'),
('message 7777777'),
('message 88888888'),
('message 999999999');

CREATE OR REPLACE FUNCTION get_all_messages()
RETURNS TABLE(j json) AS $$
BEGIN
    RETURN QUERY SELECT row_to_json(a) FROM (
        SELECT messages.id, messages.message FROM messages ORDER BY id
    ) AS a;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_message_by_id(p_message_id INTEGER)
RETURNS TABLE(id INTEGER, message TEXT) AS $$
BEGIN
    RETURN QUERY SELECT messages.id, messages.message FROM messages WHERE messages.id = p_message_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION insert_message(message_text TEXT)
RETURNS json AS $$
DECLARE
    new_id INTEGER;
    new_message RECORD;
BEGIN
    INSERT INTO messages (message) VALUES (message_text) RETURNING id INTO new_id;
    SELECT id, message INTO new_message FROM messages WHERE id = new_id;
    RETURN row_to_json(new_message);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION delete_message(p_message_id INTEGER)
RETURNS json AS $$
DECLARE
    deleted_message RECORD;
BEGIN
    DELETE FROM messages WHERE id = p_message_id RETURNING * INTO deleted_message;
    IF found THEN
        RETURN json_build_object('success', json_build_object('message', 'Сообщение удалено', 'id', deleted_message.id));
    ELSE
        RETURN json_build_object('error', 'Сообщение не найдено');
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_message(p_message_id INTEGER, p_message_text TEXT)
RETURNS json AS $$
DECLARE
    updated_message RECORD;
BEGIN
    UPDATE messages SET message = p_message_text WHERE id = p_message_id RETURNING * INTO updated_message;
    IF found THEN
        RETURN json_build_object('success', row_to_json(updated_message));
    ELSE
        RETURN json_build_object('error', 'Сообщение не найдено');
    END IF;
END;
$$ LANGUAGE plpgsql;












-- CREATE DATABASE studydb;

-- CREATE USER studyuser WITH ENCRYPTED PASSWORD 'passstudyuser';

-- GRANT ALL PRIVILEGES ON DATABASE studydb TO studyuser;



-- -- Create tables


-- CREATE TABLE SLV_MESSAGES(
--    ID_MESSAGE serial PRIMARY KEY,
--    TEXT_MESSAGE CHARACTER VARYING DEFAULT '-'
-- );




-- -- Create functions


-- CREATE OR REPLACE FUNCTION SP_GET_MESSAGES()
--   RETURNS table (j json)
--   AS $$
--     BEGIN
--       RETURN QUERY SELECT row_to_json(a) from (
--           SELECT * FROM SLV_MESSAGES ORDER BY ID_MESSAGE) a;
--     END;
--   $$
--   LANGUAGE plpgsql;



-- CREATE OR REPLACE FUNCTION SP_GET_MESSAGE_FOR_ID(
--    _ID_MESSAGE INTEGER
-- )
--   RETURNS table (j json)
--   AS $$
--     BEGIN
--       RETURN QUERY SELECT row_to_json(a) from (
--           SELECT * FROM SLV_MESSAGES
--           WHERE ID_MESSAGE=_ID_MESSAGE
--         ) a;
--     END;
--   $$
--   LANGUAGE plpgsql;



-- CREATE OR REPLACE FUNCTION SP_INSERT_MESSAGE(
--    _TEXT_MESSAGE CHARACTER VARYING DEFAULT '-'
-- )
--   RETURNS SETOF INT AS
--   $BODY$
--       BEGIN
--         RETURN QUERY INSERT INTO SLV_MESSAGES (TEXT_MESSAGE)
--           VALUES(_TEXT_MESSAGE)
--           RETURNING ID_MESSAGE;
--       END;
--   $BODY$
--   LANGUAGE 'plpgsql' VOLATILE
--   COST 100;




-- CREATE OR REPLACE FUNCTION SP_UPDATE_MESSAGE(
--    _ID_MESSAGE INTEGER,
--    _TEXT_MESSAGE CHARACTER VARYING DEFAULT '-'
-- )
--   RETURNS SETOF INT AS
--   $BODY$
--       BEGIN
--         RETURN QUERY UPDATE SLV_MESSAGES SET
--             TEXT_MESSAGE = _TEXT_MESSAGE,
--           WHERE ID_MESSAGE =_ID_MESSAGE
--           RETURNING ID_MESSAGE;
--       END;
--   $BODY$
--   LANGUAGE 'plpgsql' VOLATILE
--   COST 100;





-- CREATE OR REPLACE FUNCTION SP_DELETE_MESSAGE(
--    _ID_MESSAGE INTEGER
-- )
--   RETURNS SETOF INT AS
--   $BODY$
--       BEGIN
--         RETURN QUERY DELETE FROM SLV_MESSAGES
--             WHERE ID_MESSAGE = _ID_MESSAGE
--         RETURNING ID_MESSAGE;
--       END;
--   $BODY$
--   LANGUAGE 'plpgsql' VOLATILE
--   COST 100;






-- GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO studyuser;
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO studyuser;