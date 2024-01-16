number_of_pages = int(input())
pages_for_one_hour = int(input())
number_of_days = int(input())

total_time_for_book = number_of_pages / pages_for_one_hour
hours_for_book_per_day = total_time_for_book / number_of_days
print(int(hours_for_book_per_day))