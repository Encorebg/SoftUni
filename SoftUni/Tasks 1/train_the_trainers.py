number_of_people = int(input())

presentation = input()
average_grade_counter = 0
total_grade_counter = 0
jury_counter = 0
while presentation != "Finish":
    for _ in range(number_of_people):
        grade = float(input())
        average_grade_counter += grade
        total_grade_counter += grade
        jury_counter += 1
    grade_for_presentation = average_grade_counter / number_of_people
    print(f"{presentation} - {grade_for_presentation:.2f}.")
    average_grade_counter = 0
    presentation = input()

average_grade = total_grade_counter / jury_counter
print(f"Student's final assessment is {average_grade:.2f}.")
