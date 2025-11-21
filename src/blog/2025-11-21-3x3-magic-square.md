---
title: How to Construct a 3×3 Magic Square
description: >-
  The post will feature how to mathematically construct a 3×3 Magic Square, as
  well as what constitutes a Magic Square in the first place. 
author: Janek
date: 2025-11-21T19:00:00.000Z
tags:
  - post
  - featured
image: /assets/blog/3x3_magic_square.png
imageAlt: An image of a 3×3 Magic Square
pdf: /assets/blog/magic_square_3x3.pdf
status: published
---
## What is a Magic Square?

A magic square is a square grid filled with distinct positive integers such that the sum of the numbers in each row, each column, and both main diagonals is the same.  
This constant sum is called the **magic constant**.

---

## Magic Constant Formula

For an \( n \times n \) magic square, the magic constant \( M \) is:

\[
M = \frac{n(n^2 + 1)}{2}
\]

For a \( 3 \times 3 \):

\[
M = \frac{3(3^2 + 1)}{2}
= \frac{3(9 + 1)}{2}
= \frac{30}{2}
= 15
\]

Each row, each column, and both diagonals must add up to **15**.

---

## Constructing an Odd-Order Magic Square

The simplest method is the **Siamese Method (De la Loubère Method)**.  
The algorithm:

1. **Start** with the number **1** in the middle of the top row.
2. **Move up and right** to place the next number.  
   If this goes out of bounds, wrap around.
3. If the target cell is already filled **or** you move outside the **top-right corner**,  
   then **move down one** instead.
4. **Repeat** until all cells are filled.

---

# Validating the Magic Square

### Rows
- Row 1: \(8 + 1 + 6 = 15\)
- Row 2: \(3 + 5 + 7 = 15\)
- Row 3: \(4 + 9 + 2 = 15\)

### Columns
- Col 1: \(8 + 3 + 4 = 15\)
- Col 2: \(1 + 5 + 9 = 15\)
- Col 3: \(6 + 7 + 2 = 15\)

### Diagonals
- Diagonal 1: \(8 + 5 + 2 = 15\)
- Diagonal 2: \(6 + 5 + 4 = 15\)

---

**Quod Erat Demonstrandum**

