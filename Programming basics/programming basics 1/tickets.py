student_ticket_counter = 0
standart_ticket_counter = 0
kids_ticket_counter = 0

while True:
    command = input()
    if command == "Finish":
        break

    free_places = int(input())
    current_movie_ticket_counter = 0
    for places in range(free_places):
        type_of_ticket = input()
        if type_of_ticket == "End":
            break
        current_movie_ticket_counter += 1

        if type_of_ticket == "student":
            student_ticket_counter += 1
        elif type_of_ticket == "standard":
            standart_ticket_counter += 1
        else:
            kids_ticket_counter += 1
    percentage_full = current_movie_ticket_counter / free_places * 100
    print(f"{command} - {percentage_full:.2f}% full.")

total_tickets = standart_ticket_counter + student_ticket_counter + kids_ticket_counter
percent_student = student_ticket_counter / total_tickets * 100
percent_standart = standart_ticket_counter / total_tickets * 100
percnt_kids = kids_ticket_counter / total_tickets * 100

print(f"Total tickets: {total_tickets}")
print(f"{percent_student:.2f}% student tickets.")
print(f'{percent_standart:.2f}% standard tickets.')
print(f"{percnt_kids:.2f}% kids tickets.")