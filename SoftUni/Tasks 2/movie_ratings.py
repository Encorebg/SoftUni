from sys import maxsize
number_of_movies = int(input())
total_rating = 0
highest_rating = -maxsize
lowest_rating = maxsize
highest_name = ""
lowest_name = ""
for movies in range(number_of_movies):
    name_of_movie = input()
    rating = float(input())
    total_rating += rating

    if rating > highest_rating:
        highest_rating = rating
        highest_name = name_of_movie

    if rating < lowest_rating:
        lowest_rating = rating
        lowest_name = name_of_movie

rating_average = total_rating / number_of_movies

print(f"{highest_name} is with highest rating: {highest_rating}")
print(f"{lowest_name} is with lowest rating: {lowest_rating}")
print(f"Average rating: {rating_average:.1f}")