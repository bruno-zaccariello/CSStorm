Main Changes :

    * Border-box on all elements
    * Removed blue outline from all elements
    * Set default 5px for margin and padding on all elements (except body and html)

Headings :

    Set default font-sizes for h1 to h5

Paragraphs :

    Set default font-size for paragraphs

Anchors :

    Small changes on it's colors


Buttons :

    Set a new default button style for <button> and <input type=button>

    Added a couple of classes to personalize buttons:
        
        .confirm
        .cancel
        .cf_confirm
        .cf_cancel
        
        .expandable
        this one is a special case, you need to set it's initial width value, otherwise
        the transition won't work (it comes as 150px as default)

Tables :

    A few modifications to the default table tags.
    <table> is now bordered, with collapse on and no padding.

    <caption> is located under the tables with a gray-ish color. smaller font, and the same
    width as the table. there's also a 5px margin-top only.

    <thead> have a darker color from the table body

    <td>, <th> have a 10px padding

    for a fully bordered table use .full_border class
    for line division only use .Ln_border class
    for a column division only use .col_border class

    if you want a hover effect on the lines use the .hv class

Navbar :

    To setup a navbar use the .navbar class (preferably on a <div> or <header>)
    if you want a dropdown menu on any item use the .dropdown and inside it use 
    the .dd_holder class on a cointainer with the subitems.

    if you want it sticky use .nb_sticky class on the navbar

    Ex.:
        <header class="navbar nb_sticky">             # Navbar

            <div class="dropdown">          # Item with dropdown
                <div class="dd_holder">     # Cointainer for dropdown items
                    ...
                    <items>
                    ...
                </div>
            </div>
            
        </header>