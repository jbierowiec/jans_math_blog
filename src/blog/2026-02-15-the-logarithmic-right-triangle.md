---
title: The Logarithmic Right Triangle
description: >-
  The post will feature how to mathematically find the solution for x in the
  logarithmic right triangle, as well as proving that these sides hold true with
  respect to the Pythagorean Theorem.
author: Janek
date: 2026-02-16T00:53:44.683Z
tags:
  - ''
image: /assets/blog/right_logarithmic_triangle.png
pdf: /assets/blog/logarithmic_right_triangle_proof.pdf
status: published
---
## What is a Logarithmic Right Triangle?

A **logarithmic right triangle** is a geometric configuration where the side lengths are defined by natural logarithms, often expressed as ln(x), ln(2x), and ln(3x).

---

## Pythagorean Theorem

To prove that a logarithmic right triangle is valid, the pythagorean theorem is used:

\\[ a^2 + b^2 = c^2 \\]

For a 3− 4− 5 right triangle:

\\[
3^2 + 4^2 = 5^2
9 + 16 = 25
25 = 25
\\]

The sides that are perpendicular to each other, when squared and added together, the resulting numerical sum should equal the square of the resultant side that connects the tail of the first side to the head of the second side.

---

## Constructing an even order Magic Square

In contrast to constructing an odd-order magic square, using the **Siamese method** or the **De la Loubère method**, a new strategy will be used. To construct an even-order 4×4
magic square, the algorithm for doing so is the following:

1. Fill the entire 4 × 4 square with numbers from 1 to 16 in order.

2. Identify the pattern of positions to keep and replace:
   - Keep numbers in diagonally symmetric cells (top-left to bottom-right and top-right to bottom-left).
   - Replace the rest with their complement with respect to 17 (that is, 17−original number).

---

## Finding the 4×4 Magic Square

Below is a correctly constructed 4×4 magic square using this new algorithm.

<center>

|     |     |     |     |
| --- | --- | --- | --- |
| 1   | 2   | 3   | 4   |
| 5   | 6   | 7   | 8   |
| 9   | 10  | 11  | 12  |
| 13  | 14  | 15  | 16  |

</center>

The numbers in diagonally symmetric cells (top-left to bottom-right and top-right to bottom-left) are now kept in the same place, whereas the other numbers are replaced with their
complement with respect to 17 (that is, 17− original number).

<center>

|     |     |     |     |
| --- | --- | --- | --- |
| 1   |     |     | 4   |
|     | 6   | 7   |     |
|     | 10  | 11  |     |
| 13  |     |     | 16  |

</center>

---

Compliment Calculation:

(Row 1, Column 2) 17 - 2 = 15

(Row 1, Column 3) 17 - 3 = 14

(Row 2, Column 1) 17 - 5 = 12

(Row 2, Column 4) 17 - 8 = 9

(Row 3, Column 1) 17 - 9 = 8

(Row 3, Column 4) 17 - 12 = 5

(Row 4, Column 2) 17 - 14 = 3

(Row 4, Column 3) 17 - 15 = 2

The final result is the following.

<center>

|     |     |     |     |
| --- | --- | --- | --- |
| 1   | 15  | 14  | 4   |
| 12  | 6   | 7   | 9   |
| 8   | 10  | 11  | 5   |
| 13  | 3   | 2   | 16  |

</center>

Now we will validate whether all the row numbers, column numbers, and diagonal numbers in fact add up to 34.

## Validating the Magic Square

Rows

- Row 1: 1 + 15 + 14 + 4 = 34
- Row 2: 12 + 6 + 7 + 9 = 34
- Row 3: 8 + 10 + 11 + 5 = 34
- Row 4: 13 + 3 + 2 + 16 = 34

Columns

- Column 1: 1 + 12 + 8 + 13 = 34
- Column 2: 15 + 6 + 10 + 3 = 34
- Column 3: 14 + 7 + 11 + 2 = 34
- Column 4: 4 + 9 + 5 + 16 = 34

Diagonals

- Diagonal 1: 13 + 10 + 7 + 4 = 34
- Diagonal 2: 1 + 6 + 11 + 16 = 34

---

<center>

**Quod Erat Demonstrandum**

</center>
