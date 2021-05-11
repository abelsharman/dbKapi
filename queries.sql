create table user(
	id int primary key auto_increment, 
    login varchar(255),
    password varchar(255)
);

create table article(
    id int PRIMARY key, 
    title VARCHAR(255),
    publication VARCHAR(255), 
    author VARCHAR(255), 
    date date,
    year int, 
    MONTH int,
    url VARCHAR(255),
    content text
);

create table favorite(
	id int primary key auto_increment, 
    user_id int,
    article_id int, 
    article_title varchar(255),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (article_id) REFERENCES article(id)
);

create table browser(
	id int primary key auto_increment, 
    name varchar(255)
);

create table liked(
	id int primary key auto_increment, 
    browser_id int,
    article_id int, 
    article_title varchar(255),
    FOREIGN KEY (browser_id) REFERENCES browser(id),
    FOREIGN KEY (article_id) REFERENCES article(id)
);

select title from article where title like "%a%" and author like "%n%";
select title from article where title like '%a%' and author like '${author}'

select max(count(article_id)) from favorite;


SELECT article_id AS id, article_title as title, COUNT(article_id) AS count 
FROM favorite 
GROUP BY article_id, article_title
ORDER BY article_id asc
LIMIT 10;

select * from article where title like '%a%' and author like '%b%' order by year limit 100;

insert into favorite(user_id, article_id, article_title) values(2, 36054, 'Title');

insert into favorite(user_id, article_id, article_title) values(2, 36056, 'Title');

