all:
	node get-list.js > protocol-numbers.js
clean:
	rm -f protocol-numbers.js

.PHONY: all clean
