name_of_movie = input()
number_of_days = int(input())
number_of_tickets = int(input())
price_for_ticket = float(input())
percent_for_cinema = int(input())

price_for_tickets_per_day = number_of_tickets * price_for_ticket
total_incomes = price_for_tickets_per_day * number_of_days
percent_for_cinema = total_incomes * (percent_for_cinema / 100)
total_incomes_without_percent = total_incomes - percent_for_cinema

print(f"The profit from the movie {name_of_movie} is {total_incomes_without_percent:.2f} lv.")