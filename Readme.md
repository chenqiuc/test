
# Binary Search 

# & Depth-first Search

#### Qiuchi Chen / NUID:001448400 / 6150 Assignment 03

---

* Development Environment: IntelliJ IDEA.

* Language: Javascript.

* File Format: .js

## About Repository

### Files

- "6150Ass03_BS.js" is the file created for the binary search implement.

- "6150Ass03_DFS.js" is the file created for the depth-first search implement.


### Binary Search

- Binary search is a search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

- Prerequisites: binary search can only use for the sorted array.

- Implement: there is two methods for implementing the binary search. One of them uses the while loop, the other one uses the recursion.

- code:

- While loop:
		
		function binarySearch(arr,data){
		    var l = 0;
		    var r = arr.length-1;
		    while ( l <= r ) {
		        var mid = Math.floor((l+r)/2);
		        if ( data < arr[mid] ) {
		            r = (mid - 1);
		        }else if(data > arr[mid]){
		            l = (mid + 1);
		        }else {
		            return console.log("the location of data is: " + (l+1) +"  :-)");
		        }
		    }
		}
		var arr = [1,2,3,4,5,6,7,8,9];
		binarySearch(arr, 3);
		binarySearch(arr, 8);
		
	
- Output:<br>

<pre><code>
  the location of data is: 3  :-)
  the location of data is: 8  :-)
  </code></pre>

- Recursion:
<pre><code>
		function binarysearch_recursion(arr, target, loc){
		
		    var mid = Math.floor(arr.length/2);
		
		    if(arr.length === 1)//print out
		    {
		        if(target != arr[0])
		        {
		             return console.log("Target number isn't in the array.");
		        }
		        else
		            {
		                return console.log("Location is "+(loc + mid + 1)+".   :-)");
		            }
		    }
		    if (arr[mid] === target)
		    {
		        return console.log("Location is " + (mid + loc + 1)+".   :-)" );
		    }
		    else if(target < arr[mid])
		    {
		        return binarysearch_recursion(arr.slice(0, mid),target, loc);
		    }
		    else if(target > arr[mid])
		    {
		        return binarysearch_recursion(arr.slice(mid), target, (loc+Math.floor(arr.length/2)));
		    }
		}
		
		var arr = [1,2,3,4,5,6,7,8,9];
		binarysearch_recursion(arr,3,0);
		binarysearch_recursion(arr,8,0);
		binarysearch_recursion(arr,1,0);
		binarysearch_recursion(arr,20,0);
		</code></pre>

- Output:
<pre><code>
	Location is 3.   :-)
	Location is 8.   :-)
	Location is 1.   :-)
	Target number isn't in the array.<br>
</code></pre>


### Depth-First Search Search
- Depth-first search is an algorithm for traversing or searching tree or graph data structures.
The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph)
and explores as far as possible along each branch before backtracking.

- Prerequisites: Build a tree.

- Code:

		   function BinaryTree(){
		
		    var Node = function(key){
		        this.key = key;
		        this.left = null;
		        this.right = null;
		    }
	
		    var root = null;
		    var insertNode = function (node,newNode){
		        if(newNode.key < node.key){
		            if(node.left === null){
		                node.left = newNode;
		                console.log("Left: "+newNode.key);
		            }else {
		                insertNode(node.left, newNode);
		            }
		        }else{
		            if (node.right === null){
		                node.right = newNode;
		                console.log("Right: "+newNode.key);
		            }else{
		                insertNode(node.right, newNode);
		            }
		        }
		    }
		
		    this.insert = function(key){
		        var newNode = new Node(key);
		        if(root === null){
		            root = newNode;
		            console.log("Root: "+newNode.key);
		        }else{
		            insertNode(root, newNode);
		        }
		
		    }
		
		    var pre_order_traverseNode = function(node, callback){
		        if(node != null){
		            callback(node.key);
		            pre_order_traverseNode(node.left, callback);
		            pre_order_traverseNode(node.right, callback);
		        }
		    }
		    this.pre_order_traverse = function(callback)
		    {
		        pre_order_traverseNode(root, callback);
		    }
		}
	
		var nodes = [13,34,6,7,4,14,3,5,6];
		var binaryTree = new BinaryTree();
		nodes.forEach(function(key){
		    binaryTree.insert(key);
		});
		
		var callback = function(key){
		    console.log(key);
		}
		binaryTree.pre_order_traverse(callback);
	
- Output:

<pre><code>
	Root: 13
	Right: 34
	Left: 6
	Right: 7
	Left: 4
	Left: 14
	Left: 3
	Right: 5
	Left: 6
	13
	6
	4
	3
	5
	7
	6
	34
	14<br>
</code></pre>

### How To Run The Project

- Open the development tool in the chrome.

- Choose console.

- Past the code to the console.

- Run the code and output will appear.



>###  Reference <br>
>- Binary Search:<br>
>https://en.wikipedia.org/wiki/Binary_search_algorithm<br><br>
>- Depth-First Search:<br>
>https://en.wikipedia.org/wiki/Depth-first_search<br>
>https://www.jianshu.com/p/b4d8085e84bd<br>
>https://www.youtube.com/watch?v=hHIaKyExQsA&list=PLuRm_QtoJ4J-Ld1BPZ7F2VLfNgfgjpj17<br>
>https://www.imooc.com/learn/888<br>






