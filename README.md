# Spellbook-Generator
This is a tool I made for random spellbook generation in 5e Dungeons and Dragons (and other games that use the 5e SRD).
[Visit the webpage in action here.] (http://web.cecs.pdx.edu/~arredon/spellbook/)

## Project right now
User selects a class level for the wizard whose spellbook they are creating. The spellbook is populated with the minimum number of spells that that wizard would know for their level (6 at level one, plus two more per level), with new spells being added at the highest available spell slot.

### Wealth
A means for determing additional spells known by the wizard. Right now I'm thinking three levels - poor, middle, rich - which would add 0, 1, and 2 spells per level, respectively.
### School
Choose a school specialization for the wizard, and their spell book will guarantee two spells per level of their specialization (when there are actually two spells in their school for their level).


## Planned additions
### File upload
Upload a JSON file containing custom spells to be added to the library.

## Stretch Goals
### Character archetype
Gear spells towards character type
* Scholar
* Explorer
* Warmage

# License
Copyright 2017 Daniel J. Arredondo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
