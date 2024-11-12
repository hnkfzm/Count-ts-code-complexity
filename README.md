# Count-ts-code-complexity
For count the typescript or javascript code complexity.
1. 功能说明
该工具提供下面功能

计算工作目录下所有ts、ets文件，计算文件复杂度平均值
计算每个文件中是否存在超过100的数组，如果有复杂度+10

2. 工具
依赖环境：node环境

支持系统：Windows，Mac

ComplexityJs.js

使用说明：

把ComplexityJs.js拷贝到文件目录，执行

node ComplexityJs.js

3. 数据

行业对复杂度通用理解
<table class="relative-table confluenceTable"><colgroup><col style="width: 22.1544%;" /><col style="width: 18.1477%;" /><col style="width: 19.899%;" /><col style="width: 39.8067%;" /></colgroup><tbody><tr><th class="confluenceTh" style="text-align: center;">复杂度</th><th class="confluenceTh" style="text-align: center;">代码状况</th><th class="confluenceTh" style="text-align: center;">可测性</th><th class="confluenceTh" style="text-align: center;">维护成本</th></tr><tr><td class="confluenceTd" style="text-align: center;">1 ~ 10</td><td class="confluenceTd" style="text-align: center;">清晰</td><td class="confluenceTd" style="text-align: center;">高</td><td class="confluenceTd" style="text-align: center;">低</td></tr><tr><td class="confluenceTd" style="text-align: center;">10 ~ 20</td><td class="confluenceTd" style="text-align: center;">复杂</td><td class="confluenceTd" style="text-align: center;">中</td><td class="confluenceTd" style="text-align: center;">中</td></tr><tr><td class="confluenceTd" style="text-align: center;">20 ~ 30</td><td class="confluenceTd" style="text-align: center;">非常复杂</td><td class="confluenceTd" style="text-align: center;">低</td><td class="confluenceTd" style="text-align: center;">高</td></tr><tr><td class="confluenceTd" style="text-align: center;" colspan="1">&gt; 30</td><td class="confluenceTd" style="text-align: center;" colspan="1">不可读</td><td class="confluenceTd" style="text-align: center;" colspan="1">不可测</td><td class="confluenceTd" style="text-align: center;" colspan="1">非常高</td></tr></tbody></table>
