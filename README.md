# Algorithms I
Exercises and projects related to the Algorithms I course from Princeton University on Coursera.

1.5 Union Find, The Network Connectivity Problem, and Percolation
 - Quick-Find Implementation: easy to write and understand, but too slow for large values of N (initialization and union are both O(n)
 - Quick-Union Implementation: still simple to write and understand and on average faster than quick-find, but is still O(n) in worst-case scenario (very tall trees) for both union and find
 - Weighted Quick-Union: Union and find methods are both O(logn) because of a new array to track sizes so we can ensure that the larger of two trees being united is closer to the root
 - Weighted Quick-Union with Path Compression: Since we already look at every node to find the root of p, we can add a single line to make all nodes in the path point to a grandparent node
 
 Programming Assignment: In a famous scientific problem, researchers are interested in the following question: if sites are independently set to be open with probability p (and therefore blocked with probability 1 − p), what is the probability that the system percolates? When p equals 0, the system does not percolate; when p equals 1, the system percolates.  When n is sufficiently large, there is a threshold value p* such that when p < p* a random n-by-n grid almost never percolates, and when p > p*, a random n-by-n grid almost always percolates. No mathematical solution for determining the percolation threshold p* has yet been derived. Your task is to write a computer program to estimate p*.
