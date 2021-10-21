// Creating an array of hexadecimal unicodes for the gallery
const emojis = ['8986','9197','9203','9208','9209','9210','9748','9749','9800','9801','9802','9803','9804','9805','9806','9807','9808','9809','9810','9811','9875','9889','9924','9925','9940','9962','9970','9971','9978','9981','9997','10024','10068','10133','10134','10135','10160','11088','11093','126980','12953','127378','127754','127751','127752','127759','127769','127774','127789','127793','127799','127800','127801','127802','127803','127804','127805','127810','127812','127813','127814','127815','127816','127817','127818','127819','127820','127821','127822','127825','127826','127827','127836','127839','127842','127846','127848','127856','127865','127875','127876','127880','127904','127908','127911','127912','127917','127928','127929','127931','127983','128009','128013','128027','128030','128081','128096','128150','128165','128128']

// Creating an empty array where the loop of the above array will be inserted. It will be sent to the HTML file later on by joining it with innerHTML
const HTMLforEmojis = []

// Creating a loop for emojis by using the for statement with iteration and adding HTML elements by using template literals. Adding a div in the template literals to make the responsive elements easier to maipulate using the CSS grids. Also adding &# in the loop and not in the array above to make sure everything stays in one array and to also make sure that the unicode appears below the displayed emoji.
for (let i=0; i < emojis.length; i++) {
    HTMLforEmojis.push(`<div class="emoji-gallery"><p class="emoji-picture">&#${emojis[i]}</p><p class="unicode">${emojis[i]}</p>
                        </div>`)
}

// Calling the container from HTML in order to push everything / (join) all the elements/objects by using innerHTML
const $container = document.getElementById("container");
$container.innerHTML = HTMLforEmojis.join(" ");