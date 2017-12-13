update books
set title = $1,
author = $2,
book_description = $3,
genre = $4,
image_url = $5,
inventory = $7,
user_id = $8
where book_id = $6;

select * from books where book_id = $6;