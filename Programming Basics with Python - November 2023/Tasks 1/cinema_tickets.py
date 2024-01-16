command = input()
student_ticket_counter = 0
standart_ticket_counter = 0
kid_ticket_counter = 0
while command != "Finish":
    free_places = int(input())
    total_ticket_counter = 0
    for _ in range(free_places):
        type_of_projection = input()
        if type_of_projection == "End":
            break
        elif type_of_projection == "student":
            student_ticket_counter += 1
        elif type_of_projection == "standard":
            standart_ticket_counter += 1
        else:
            kid_ticket_counter += 1
        total_ticket_counter += 1

    percent_full = total_ticket_counter / free_places * 100
    print(f"{command} - {percent_full:.2f}% full.")
    command = input()


total_tickets = standart_ticket_counter + student_ticket_counter + kid_ticket_counter

student_tickets_percentage = student_ticket_counter / total_tickets * 100
kids_tickets_percentage = kid_ticket_counter / total_tickets * 100
standart_ticket_percentage = standart_ticket_counter / total_tickets * 100

print(f"Total tickets: {total_tickets}")
print(f"{student_tickets_percentage:.2f}% student tickets.")
print(f"{standart_ticket_percentage:.2f}% standard tickets.")
print(f"{kids_tickets_percentage:.2f}% kids tickets.")