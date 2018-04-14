package main

import (
	"bufio"
	"errors"
	"fmt"
	"os"
	"regexp"
	"testing"
)

type Used [9]bool

func (u *Used) Add(n int) error {
	n-- //change from 1 to 9 in sudoku to 0 to 8 for indexing
	if u[n] {
		return errors.New("number is used")
	}
	u[n] = true
	return nil
}

func TestSudoku(t *testing.T) {
	f, err := os.Open("README.md")
	if err != nil {
		t.Fatal(err)
	}
	defer f.Close()
	r := bufio.NewReader(f)
	skipLines(r, 10)
	var rs, cs, bs [9]Used
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			t.Run(fmt.Sprintf("line %v%v", i+1, j+1), func(t *testing.T) {
				n, err := nextNumber(r)
				if err != nil {
					t.Fatal(err)
				}
				if n == 0 {
					return
				}
				err = rs[i].Add(n)
				if err != nil {
					t.Fatal(err)
				}
				err = cs[j].Add(n)
				if err != nil {
					t.Fatal(err)
				}
				k := i/3 + (j/3)*3
				err = bs[k].Add(n)
				if err != nil {
					t.Fatal(err)
				}
			})
		}
		skipLines(r, 1)
	}
}

var numberRegexp = regexp.MustCompile(`[1-9]`)
var spaceRegexp = regexp.MustCompile(`&nbsp;`)

func nextNumber(r *bufio.Reader) (int, error) {
	line, pre, err := r.ReadLine()
	if err != nil {
		return 0, err
	}
	if pre {
		return 0, errors.New("unhandled pre")
	}
	numbers := numberRegexp.FindAll(line, -1)
	if len(numbers) > 1 {
		return 0, errors.New("too many digits")
	}
	if len(numbers) == 1 {
		return int(numbers[0][0] - '0'), nil
	}
	space := spaceRegexp.Find(line)
	if space == nil {
		return 0, errors.New("expected space filler for empty cells")
	}
	return 0, nil
}

func skipLines(r *bufio.Reader, n int) error {
	for i := 0; i < n; i++ {
		_, pre, err := r.ReadLine()
		if err != nil {
			return err
		}
		if pre {
			i--
		}
	}
	return nil
}
