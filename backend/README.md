SQL Schema
---------------------
Issues
| Field       | Type          | Null | Key | Default | Extra          |
|-------------|---------------|------|-----|---------|----------------|
| Title       | varchar(255)  | YES  |     | NULL    |                |
| Series      | varchar(255)  | YES  |     | NULL    |                |
| ReleaseDate | varchar(255)  | YES  |     | NULL    |                |
| Description | varchar(2000) | YES  |     | NULL    |                |
| ImageURL    | varchar(255)  | YES  |     | NULL    |                |
| Authors     | json          | YES  |     | NULL    |                |
| Characters  | json          | YES  |     | NULL    |                |
| IssueID     | int(11)       | NO   | PRI | NULL    | auto_increment |

Characters
| Field           | Type          | Null | Key | Default | Extra          |
|-----------------|---------------|------|-----|---------|----------------|
| HeroName        | varchar(255)  | YES  |     | NULL    |                |
| RealName        | varchar(255)  | YES  |     | NULL    |                |
| Aliases         | varchar(1000) | YES  |     | NULL    |                |
| Alignment       | varchar(255)  | YES  |     | NULL    |                |
| Appearance      | json          | YES  |     | NULL    |                |
| Creators        | json          | YES  |     | NULL    |                |
| Deck            | varchar(1000) | YES  |     | NULL    |                |
| Description     | varchar(2000) | YES  |     | NULL    |                |
| FirstAppearance | varchar(255)  | YES  |     | NULL    |                |
| ImageURL        | varchar(255)  | YES  |     | NULL    |                |
| CharacterID     | int(11)       | NO   | PRI | NULL    | auto_increment |

Authors
| Field       | Type          | Null | Key | Default | Extra          |
|-------------|---------------|------|-----|---------|----------------|
| Name        | varchar(255)  | YES  |     | NULL    |                |
| Aliases     | varchar(1000) | YES  |     | NULL    |                |
| Birth       | varchar(255)  | YES  |     | NULL    |                |
| Country     | varchar(255)  | YES  |     | NULL    |                |
| Death       | varchar(255)  | YES  |     | NULL    |                |
| Deck        | varchar(1000) | YES  |     | NULL    |                |
| Description | varchar(2000) | YES  |     | NULL    |                |
| Hometown    | varchar(255)  | YES  |     | NULL    |                |
| ImageURL    | varchar(255)  | YES  |     | NULL    |                |
| AuthorID    | int(11)       | NO   | PRI | NULL    | auto_increment |


Insert SQL Commands
---------------------
`INSERT INTO Issues(Title, Series, ReleaseDate, Description, ImageURL, Authors, Characters) values(...);`

`INSERT INTO Characters(HeroName, RealName, Aliases, Alignment, Appearance, Creators, Deck, Description, FirstAppearance, ImageURL) values(...);`

`INSERT INTO Authors(Name, Aliases, Birth, Country, Death, Deck, Description, Hometown, ImageURL) values(...);`


SQL Queries
---------------------
`SELECT * FROM Issues WHERE Title = '<Title>';`

`SELECT * FROM Characters WHERE HeroName = '<HeroName>';`

`SELECT * FROM Authors WHERE Name = '<Name>';`


Linkage from Issues to Characters and Authors
---------------------
`SELECT Title, Characters FROM Issues WHERE JSON_SEARCH(Authors, 'all', '<Name>%') > 1;`

`SELECT Title, Authors FROM Issues WHERE JSON_SEARCH(Characters, 'all', '<HeroName>') > 1;`
