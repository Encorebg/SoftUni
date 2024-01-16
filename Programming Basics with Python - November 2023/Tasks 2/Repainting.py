required_amounnt_of_nylon = int(input())
required_amount_of_paint = int(input())
amount_of_thinner = int(input())
hours_for_work = int(input())

total_costs_for_materials = (required_amounnt_of_nylon + 2) * 1.50 \
    + (required_amount_of_paint + required_amount_of_paint * 0.1) * 14.50 + amount_of_thinner * 5 + 0.40
sum_for_workers = total_costs_for_materials * 0.3 * 8
total_sum = total_costs_for_materials + sum_for_workers
print(total_sum)
