create database food_ordering;
use food_ordering;
create table categories (
    id bigint primary key auto_increment,
    name varchar(50) not null unique
);
insert into categories(name) values
('Pizza'),
('Burger'),
('Biryani'),
('South Indian'),
('Chinese'),
('Beverages'),
('Desserts');
create table users (
    id bigint primary key auto_increment,
    name varchar(100) not null,
    email varchar(100) unique not null,
    password varchar(255) not null,
    phone varchar(15),
    address text,
    role varchar(20) default 'USER'
);
create table foods (
    id bigint primary key auto_increment,
    name varchar(100) not null,
    description text,
    price decimal(10,2) not null,
    image_url varchar(255),
    available boolean default true,
    category_id BIGINT,
    foreign key (category_id) references categories(id)
);
create table cart (
    id bigint primary key auto_increment,
    user_id bigint not null,
    food_id bigint not null,
    quantity INT DEFAULT 1,
    foreign key (user_id) references users(id),
    foreign key (food_id) references foods(id)
);
create table orders (
    id bigint primary key auto_increment,
    user_id bigint not null,
    total_amount decimal(10,2) not  null,
    status varchar(30) default 'PENDING',
    order_date timestamp default current_timestamp,
    foreign key (user_id) references users(id)
);
create table order_items (
    id bigint primary key auto_increment,
    order_id bigint not null,
    food_id bigint not null,
    quantity int not null,
    price decimal(10,2) not null,
    foreign key (order_id) references orders(id),
    foreign key (food_id) references foods(id)
);
show tables;
insert into foods
(name, description, price, image_url, category_id)
values
('Chicken Biryani',
 'Hyderabadi Chicken Biryani',
 249.00,
 'biryani.jpg',
 3);
select * from categories;
select * from foods;
select*from users;
select*from cart;
select*from orders;
select*from order_items;
