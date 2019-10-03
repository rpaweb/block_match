# Block Match

A little puzzle discussed at work about passing a block sequence via args and returning if that block sequence is valid or not whatever its length.

## Use

Run the script vía command line passing the block structure you need to test as an argument.

### Example No. 1

```
$ ruby blocks.rb '([({[()]})])[{(([{}]))}]'
VALID SEQUENCE!
```

### Example No. 2

```
$ ruby blocks.rb '(([{({[[{]})}]})])])}])'
WRONG SEQUENCE!
```

## Authors

* *Ruby version* - **Rafael Peña-Azar** - [RPA](https://rpaweb.github.io)
* *JavaScript version* - **Hector Villa Pizarro** - [HVP](https://github.com/hvilla)

## Acknowledgments

* This was made for fun, just to exercise the logics.
* Feel free to fork, clone and use to test every block sequence you want.
* Try to burn it down. If you do, feel free to open an issue and tell us about it.
* In the other contributor's repo, there's the one made on JS. Go find it and use it too.
* Enjoy, hahaha.

## License

GNU General Public License v3.0
