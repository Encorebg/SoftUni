deposited_sum = float(input())
depoosit_term = int(input())
annual_interest_rate = float(input())

generated_rate_per_year = deposited_sum * annual_interest_rate / 100
generated_rate_per_month = generated_rate_per_year / 12
total_sum = deposited_sum + depoosit_term * generated_rate_per_month
print(total_sum)