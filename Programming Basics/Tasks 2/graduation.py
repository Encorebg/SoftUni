student_name = input()
grades_counter = 1
evaluation_counter = 0
is_excluded = False
bad_grades_counter = 0

while grades_counter <= 12:
    evaluation = float(input())
    if evaluation < 4:
        bad_grades_counter += 1
        if bad_grades_counter == 2:
            is_excluded = True
            break
        continue
    grades_counter += 1
    evaluation_counter += evaluation


if is_excluded :
    print(f"{student_name} has been excluded at {grades_counter} grade")
else:
    average_grade = evaluation_counter / (grades_counter - 1)
    print(f"{student_name} graduated. Average grade: {average_grade:.2f}")
