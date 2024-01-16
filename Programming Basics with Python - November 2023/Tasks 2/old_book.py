searched_book = input()
book_counter = 0

while True:
    book = input()

    if book == searched_book or book == "No More Books":
        break
    book_counter += 1

if book == searched_book:
    print(f"You checked {book_counter} books and found it.")
else:
    print("The book you search is not here!")
    print(f"You checked {book_counter} books.")