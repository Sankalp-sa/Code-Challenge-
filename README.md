# Code Challenge [5] Modularization of Components

## How run the code challenge :

Step 1 : Clone this repository

Step 2 : Open the cloned project in visual studio code.

Step 3 : Go to index.html and click on "go live" in bottom right corner.

![image](https://user-images.githubusercontent.com/102241865/229342215-926dca50-e55e-4d72-9563-51b8156ef395.png)

# Documentation of Web Components :

## Web Component 1 : NavBar

### Attributes Used :

1. element : write your navbar element inside element attribute (give " " space between two different elements)
2. route : write where to go on clicking the navbar element (give " " space between two different routes)

### For example,

![image](https://user-images.githubusercontent.com/102241865/229342352-7b187ae2-5d57-4372-bc10-f8d1a66ee020.png)

here I have two elements UserCard and table and there route usercard.html and table.html repectively.

### Output :

![image](https://user-images.githubusercontent.com/102241865/229342740-f04514e4-4c85-44d4-9b1e-0c54d5109dca.png)

here, home and about elements are set default.

## Web Component 2 : UserCard 

### Attributes Used :

1. name : name of the user
2. image : image of the user
3. color : Background color for user card

### Slots used :

Use div with attribute slot and use these 

1. email : email of the user
2. phone : phone of user
3. about : desciption of the user

### Event handler used :

Here, this web component has addition feature of toggle info button which you can see in the below vide

https://user-images.githubusercontent.com/102241865/229343651-f211b45c-b696-4809-9d17-b782e3cb112e.mp4


### For Example,

![image](https://user-images.githubusercontent.com/102241865/229343731-fc7e4525-99cf-441a-b04e-b8f92bf4d676.png)

here I have uses the above mentioned attributes and slot and this is the output

### Output :

![image](https://user-images.githubusercontent.com/102241865/229343757-c1a96e49-61d7-4e25-be75-7188334d905b.png)

## Web Component 3 : Table  

### Attributes Used :

1. col : columns of the table (give " " space between two different columns) 
2. row1, row2 .... upto number of columns : fill the table by each row (give " " space between two different row elements)

### For example :

![image](https://user-images.githubusercontent.com/102241865/229344076-097092dd-c1d4-426f-8749-a6bd9c39fa67.png)

here I have given the above attributes and this is the output,

![image](https://user-images.githubusercontent.com/102241865/229344135-12f3df8b-22f9-4959-8fcc-9c5112dbb3ae.png)










