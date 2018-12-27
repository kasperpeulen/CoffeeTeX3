CoffeeTeX
=========

CoffeeTeX is a math markup language meant to be compiled into LaTeX math mode macros. All the LaTeX math macros themself still work, in other words, they are compiled to themself. But CoffeeTeX offers some non-LaTeX way to get there, with the goal to make the code easier to read, less cluttered and easier to write. CoffeeTeX is strongly inspired on ideas of ASCIIMathML, Murray Sargant's unicode language (http://www.unicode.org/notes/tn28/UTN28-PlainTextMath-v3.pdf) and jqmath. 

### Unicode typing

The foremost way to make the code less cluttered is by using unicode symbols directly in the code. Unicode symbols are not easy to type in a standard way. Therefore CoffeeTeX can not be seen independent of a editor that makes typing of unicode symbols trivial. The features of the editor are part of the specification. The editor should offer the following features:

1. Normal LaTeX macros that correspond to a direct unicode symbol, should be converted in the editor to that specific symbol. For comparison, in a similar way that hotstrings work in autohotkey.
2. The same holds for asciimathml macros. 
3. If a symbol is pressed and hold for a short time, there should appear a popup menu with different choices of unicode symbols that correspond to that key that is pressed and hold. For example, if '=' is pressed and hold, something like this should popup below the key: ![](https://cloud.githubusercontent.com/assets/1035299/4264670/4c4c747e-3c2f-11e4-90fe-2730b3edfbd4.png)

Besides the unicode part, here are some examples of other ways to simplify the LaTeX code, inspired by ASCIIMathML, Murray Sargant's unicode language and jqmath.

CoffeeTeX  | LaTeX
------------- | -------------
`∑_n=0^k √x_n`  | `\sum_{k=0}^{n} \sqrt{x_n} `
`((1,2),(2,3))`  | `\begin{pmatrix}1 & 2\\2  & 3\end{pmatrix}`
`x+↖ℝ y=x+↖ℚ y` | `x\overset{\Bbb{R}}{+} y=x\overset{\Bbb{Q}}{+} y`

### Markdown

Markdown is used for all non mathematical markup and top of this it may be good to have some syntax for writing Theorem/Proof/Definition etc.

### History

The first version of this project was originally developed between September 2014 and January 2015:
https://github.com/kasperpeulen/CoffeeTeX
 
This version actually worked really well for my use case. I have never been more productive in mathematics. In that period I wrote around 10 A4 pages of mathematics a day using this web 
app. I was very excited about this project, even so excited that I felt that I needed to learn web development in a 
proper way so that I could develop it faster with less bugs and in a more professional way. The challenges 
that I tried to solve at that time was making CoffeeTeX is a fully featured Notebook (similar as Microsoft OneNote). So 
that I could save all my mathematical work in the web app. However it became obvious that I was hacking some stackoverflow 
and github snippets together and was not a skilled web developer at all. 

I decided to learn Dart. This was before Babel existed and Javascript development felt very unstructured. I wanted 
something similar as I experienced in iOS development with Objective-C. A month later CoffeeTeX2.0 was created:
https://github.com/kasperpeulen/CoffeeTeX2.0

I developed the Unicode Picker and started working on a settings popup, so that the Unicode Picker was more configurable.
However, also in Dart my code quickly became some plate of spaghetti. I started working on open source projects to learn
better and more scalable design patterns. When I learned more and more programming at some point I begin to like 
programming more than mathematics and this project began to fade away in my list of things I was excited about.

Four years later, I'm a professional software engineer and when I was making my CV for my next programming job and looked 
at my Github history, I saw that this project has been starred quite a lot (19 stars). Given that the most recent version
is actually kind of unusable as it has a half implemented Notebook features that is full of bugs and only works if you 
really know the implementation details, I believe that there are probably quite some people in the world that have the
same vision as I have and I would love to see this project being completed.

I'm not sure if I'm going to do this, but my goal for now is getting this project in state that it may be picked up by someone
else that is passionate about this idea. In the end, a non-commercial project like this must be maintained by someone
who actively uses this project himself in his work/study/research. 