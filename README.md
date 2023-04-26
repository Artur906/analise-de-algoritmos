# Algoritmos de ordenação

Se quiser rodar o projeto no seu ambiente local pode seguir [esses paços](./runningTheProject.md)!

## Insertion Sort

O Insertion Sort tem uma complexidade de tempo de O(n^2) no pior caso, onde n é o número de elementos no vetor. Porém, para pequenas quantidades de dados, o Insertion Sort pode ser mais eficiente do que algoritmos mais complexos, como o Merge Sort ou o Quick Sort.

Todavia, em nosso experimento o insertionSort foi um dos piores em todos os aspectos, o pior caso dele ocorre quando o array está em **ordem descrescente**, podemos notar que nesse caso ele demora mais que o dobro do tempo que leva para ordenar o array **aleatório**

### array de tamanho 5000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 0.10327600002288818 |
| decrescente   | 15.200269997119904  |
| aleatório     | 7.421536004543304   |

### array de tamanho 10000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 0.01809199571609497 |
| decrescente   | 59.58378999710083   |
| aleatório     | 30.095608003139496  |

### array de tamanho 15000

| array inicial | tempo médio em `ms`  |
| ------------- | :------------------- |
| crescente     | 0.030294004678726196 |
| decrescente   | 134.94073199868203   |
| aleatório     | 66.37840000152588    |

---

## Merge Sort

O Merge Sort é um algoritmo eficiente e tem uma complexidade de tempo garantida de O(n log n) em todos os casos, onde n é o número de elementos a serem ordenados. Isso significa que ele é capaz de lidar com grandes quantidades de dados com um desempenho satisfatório.

Em nosso experimento podemos constatar que de fato, o mergeSort leva um tempo relativamente igual para todos os tipos de array, seja crescente, decrescente ou aleatório, as diferenças em nossos testes não chegaram a mais de 1.5 ms.

### array de tamanho 5000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 4.117614002227783   |
| decrescente   | 2.8667400026321412  |
| aleatório     | 2.7700340032577513  |

### array de tamanho 10000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 5.018470002412796   |
| decrescente   | 4.6762519967555995  |
| aleatório     | 5.67297600030899    |

### array de tamanho 15000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 6.777981996536255   |
| decrescente   | 7.137854005098343   |
| aleatório     | 8.497862000465393   |

---

## Single Pivot Quick Sort

Uma das vantagens do Quick Sort é que ele tem um desempenho médio muito bom, com uma complexidade de tempo de O(n log n) em média, onde n é o número de elementos a serem ordenados. Porém, em alguns casos extremos, o Quick Sort pode ter um desempenho ruim, com uma complexidade de tempo de O(n^2).

O quickSort me surpreendeu quando o assunto foram os arrays **aleatórios**, ele foi aproximadamente 6 vezes melhor do que o mergeSort, que já é um bom algoritmo.

Porem, no pior caso ele apresentou tempos muito ruins, isso quando eu consegui rodar o teste, porque o nível de complexidade ficava tão alto que estourava a pilha de recursão, então, na maioria dos arrays que eram **crescente** ou **decrescente** a gente não conseguia fazer a ordenação.

**obs**: por uma questão de implementação, decidi tirar os resultados que são problemáticos em relação ao quickSort, então podemos considerar que nos cenários crescente e decrescente temos o limite de chamadas recursivas sendo estourado.

em alguns momentos eu obtive o resultado nos arrays de tamanho pequeno(5 mil), com os tempos do array crescente em torno de 27ms e os do array descrescente proximos de 20ms.

### array de tamanho 5000

| array inicial | tempo médio em `ms`          |
| ------------- | :--------------------------- |
| crescente     | :( problema de recursividade |
| decrescente   | :( problema de recursividade |
| aleatório     | 0.5201219999790192           |

### array de tamanho 10000

| array inicial | tempo médio em `ms`          |
| ------------- | :--------------------------- |
| crescente     | :( problema de recursividade |
| decrescente   | :( problema de recursividade |
| aleatório     | 0.8311319971084594           |

### array de tamanho 15000

| array inicial | tempo médio em `ms`          |
| ------------- | :--------------------------- |
| crescente     | :( problema de recursividade |
| decrescente   | :( problema de recursividade |
| aleatório     | 1.2816559982299804           |

---

## Dual Pivot Quick Sort

A complexidade do quickSort com 2 pivôs não muda, a média dele ainda é de O(n log n), e o pior caso O(n^2).

Quanto a tempo de execução, ele foi melhor que a primeira implementação, chegando a terminar a ordenação em praticamente 1ms, foi o melhor até aqui!

### array de tamanho 5000

| array inicial | tempo médio em `ms`          |
| ------------- | :--------------------------- |
| crescente     | :( problema de recursividade |
| decrescente   | :( problema de recursividade |
| aleatório     | 0.4077960026264191           |

### array de tamanho 10000

| array inicial | tempo médio em `ms`          |
| ------------- | :--------------------------- |
| crescente     | :( problema de recursividade |
| decrescente   | :( problema de recursividade |
| aleatório     | 0.6181019973754883           |

### array de tamanho 15000

| array inicial | tempo médio em `ms`          |
| ------------- | :--------------------------- |
| crescente     | :( problema de recursividade |
| decrescente   | :( problema de recursividade |
| aleatório     | 0.9718100023269653           |

## Ramdom Pivot Quick Sort

Ainda nas experimentações com o QuickSort, agora usando a implementação com um pivo aleatório, ele teve um bom desempenho, não consegui um desempenho tão bom quanto os 'irmãos' no vetor **aleatório**, mas para compensar ele não caiu no problema de estourar o limite de chamadas recursivas!

### array de tamanho 5000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 1.540054006576538   |
| decrescente   | 1.35114000082016    |
| aleatório     | 1.6151260042190552  |

### array de tamanho 10000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 2.7009160041809084  |
| decrescente   | 2.692960002422333   |
| aleatório     | 3.1466199934482573  |

### array de tamanho 15000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 4.39289400100708    |
| decrescente   | 3.9792879998683928  |
| aleatório     | 5.031552000045776   |

## Default Method

Agora, esse aqui foi um caso curioso, esse é o método que os objetos do tipo Array do javascript usam, teve ótimos tempos na maioria dos casos, quando se tratava de arrays **aleatórios** o tempo dele foi muito parecido com o quickSort, porem, ele se saiu muito bem também quando o array já estava ordenado em ordem **crescente** ou **decrescente**, pelos resultados é um algoritmo que está com uma complexidade de aproximadamente O(n logn).

Perguntei ao chatGPT hehe, é o QuickSort mesmo, entretanto, em arrays menores ele pode usar o InsertionSort.

### array de tamanho 5000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 0.3016540050506592  |
| decrescente   | 0.27827799916267393 |
| aleatório     | 1.654777992963791   |

### array de tamanho 10000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 0.47306800246238706 |
| decrescente   | 0.5410220015048981  |
| aleatório     | 3.491650003194809   |

### array de tamanho 15000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 0.7675400006771088  |
| decrescente   | 0.797978003025055   |
| aleatório     | 5.451166000366211   |

## Heap Sort

O Heap Sort tem uma complexidade de tempo de O(n log n) em todos os casos, tornando-o um algoritmo de ordenação muito eficiente para grandes quantidades de dados. No entanto, o Heap Sort requer mais espaço de memória do que alguns outros algoritmos de ordenação, devido à necessidade de construir o Heap temporário.

Esse algoritmo teve um desempenho muito legal, o tempo de execução entre cada tamanho de array não teve grandes alterações, ele se saiu melhor do que o MergeSort em todos os casos.

### array de tamanho 5000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 0.9350159990787507  |
| decrescente   | 0.7282099997997284  |
| aleatório     | 0.9014600038528442  |

### array de tamanho 10000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 1.4932020008563995  |
| decrescente   | 1.4762240052223206  |
| aleatório     | 2.0662300038337706  |

### array de tamanho 15000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 2.4181540036201477  |
| decrescente   | 2.301931999921799   |
| aleatório     | 3.002710002660751   |

## Counting Sort

O Counting Sort tem uma complexidade de tempo linear de O(n + k), onde n é o tamanho do vetor de entrada e k é o tamanho do intervalo de valores no vetor. Isso torna o Counting Sort um algoritmo muito eficiente para vetores com valores inteiros dentro de um intervalo relativamente pequeno.

Esse aqui eu fiquei assustado, mesmo nesses onde o array era grande o tempo foi aproximadamente o mesmo, e foi muuuuito rápido, como é que pode??

Se o único requisito fosse velocidade, o counting sort com certeza seria o mais utilizado, em todos os testes ele não chegou nem perto de pegar 1ms para completar a ordenação!

Todavia, ele tem seus lados negativos, por exemplo, ele pode consumir muita memória por causa do vetor auxiliar.

### array de tamanho 5000

| array inicial | tempo médio em `ms`  |
| ------------- | :------------------- |
| crescente     | 0.2502760028839111   |
| decrescente   | 0.062354000806808474 |
| aleatório     | 0.1329699993133545   |

### array de tamanho 10000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 0.16904999256134035 |
| decrescente   | 0.18339199423789979 |
| aleatório     | 0.20603800296783448 |

### array de tamanho 15000

| array inicial | tempo médio em `ms` |
| ------------- | :------------------ |
| crescente     | 0.23851999998092652 |
| decrescente   | 0.2294659948348999  |
| aleatório     | 0.27466800332069397 |
