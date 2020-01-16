# 02-passwordGenerator
Week 3 Homework

## Introduction
A fully-functional Password Generator, capable of randomizing lowercase and uppercase letters, numbers, and special symbols, or any chosen combination of them. Password length is restricted to remain between 8 and 128 characters. A copy button is also implemented, so users can quickly take their new random password and apply it where needed.

## Features
Instead of using prompts and alerts, which this assignment called for, I decided to challenge myself and use text input boxes and checkboxes instead.

- Text box to type in password length
- Check boxes to select what type of characters user would like in the random password
- ReadOnly password generating text field
- Copy Password button

## Work in Progress
Occasionally, password will not show all checkmarked selections. This is because a random X-length password is created when all checkmarked selections are made, and randomized again with all these elements as a new string, (Ex: Taking arr1 = "abc" and arr2 = "123" and creating arr3 = "b1a3c2") which coincidentally can create the issue of not having the desired result 100% of the time. Once I discover a method of setting a specific required percentage for each included array, I'll return and implement a fix.

## Copywrite
© Victoria Kaszuba - 2020