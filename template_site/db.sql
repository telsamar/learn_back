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
RETURNS TABLE(id INTEGER, message TEXT) AS $$
BEGIN
    RETURN QUERY SELECT messages.id, messages.message FROM messages;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_message_by_id(p_message_id INTEGER)
RETURNS TABLE(id INTEGER, message TEXT) AS $$
BEGIN
    RETURN QUERY SELECT messages.id, messages.message FROM messages WHERE messages.id = p_message_id;
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