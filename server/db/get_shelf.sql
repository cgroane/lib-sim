select * from shelf
join books on books.book_id = shelf.book_id
where shelf.user_id = $1;