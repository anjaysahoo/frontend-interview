<details >
 <summary style="font-size: large; font-weight: bold">Script Loading</summary>

Render-blocking resources can include scripts, stylesheets, and HTML imports.

![img.png](img.png)

**Case-1 & 6:** 
- The script starts executing as soon as they are encountered

**Case-2:**
- As soon as scripts are encountered, HTML parsing is stopped and
we load the script then starts executing

**Case-3(End Of Body):**
- Once all HTML is parsed, scripts load and execute

**Case-4(Defer):**
- Scripts load parallelly, and as soon as HTML parsing is done we execute the 
script
- It maintains the order of execution of scripts as it is declared, hence 
good for a situation when we have interdependency of a script on each other

**Case-5(Async):**
- Scripts loads parallelly and as soon as loading complete it start 
executing and stop HTML parsing.
- Sequence of script execution is not guarantee, hence it is useful for
loading scripts which has no dependency like Google Analytics



![img_1.png](img_1.png)
![img_2.png](img_2.png)


</details>