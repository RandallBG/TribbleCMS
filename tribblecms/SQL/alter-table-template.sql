/* This is a template for ALTER TABLE */
-- Language: sql
-- Path: tribblecms\SQL\alter-table-template.sql
-- Compare this snippet from tribblecms\SQL\create-table-template.sql:
-- CREATE TABLE People(
--     id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
--     ManufacturerName VARCHAR(255) NOT NULL,
--     ModelNumber INTEGER NOT NULL
--     );
-- Compare this snippet from tribblecms\SQL\alter-table-template.sql:
-- ALTER TABLE People
--     ADD COLUMN ModelNumber INTEGER NOT NULL;

Create table People (   
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    ManufacturerName VARCHAR(255) NOT NULL,
    ModelNumber INTEGER NOT NULL
    );
    
ALTER TABLE People
    ADD Column_ModelType VARCHAR(255);

    
    

