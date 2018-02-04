Pipertable - Contextual textarea

v.0.8

A code sample for a contextual textarea ReactJs component- used to edit CSV or quick edit any relational table.
It's A textarea with table cell awareness. Originally developed for FAST data editing, to replace the SLOW separate form fields approach.

Component can be used for for smart and lightining fast tabular data editing (it's original purpose) or CSV to JSON editing.

More info: http://ziv-p.com/blog/2018/02/04/pipertable-a-contextual-textarea/

+++++++++++++++++++++++++++++++++++++++++

![Pipertable in action](https://user-images.githubusercontent.com/5362593/35781798-7819b370-09f7-11e8-89f1-c202e04a1f6e.png "")

+++++++++++++++++++++++++++++++++++++++++


Basic settings, in file ./components/Pipertable.js set:

@headers - an array of cell names to be used

@separator - the seperator character

@separatorregex - the seperator character escaped for regex use (if escaping required)

+++++++++++++++++++++++++++++++++++++++++

to run locally:
 
clone >>
 cd pipertable >> 
 npm install >> 
 npm start


Online sample:
Run - https://pipertable.stackblitz.io/

Code edit - https://stackblitz.com/edit/pipertable

 
 More info at the blog post: http://ziv-p.com/blog/2018/02/04/pipertable-a-contextual-textarea/