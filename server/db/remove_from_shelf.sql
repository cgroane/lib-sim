delete from shelf
where user_id = $1 and book_id = $2;