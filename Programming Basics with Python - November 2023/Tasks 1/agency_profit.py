airplane_company_name = input()
number_of_adult_tickets = int(input())
number_of_kid_tickets = int(input())
price_for_adult_ticket = float(input())
service_charge = float(input())

price_for_kid_ticket = price_for_adult_ticket * 0.3

price_for_adult_ticket_with_service = price_for_adult_ticket + service_charge
price_for_kid_ticket_with_service = price_for_kid_ticket + service_charge

total_price_for_tickets = number_of_adult_tickets * price_for_adult_ticket_with_service + \
    number_of_kid_tickets * price_for_kid_ticket_with_service
profit = total_price_for_tickets * 0.2

print(f"The profit of your agency from {airplane_company_name} tickets is {profit:.2f} lv.")