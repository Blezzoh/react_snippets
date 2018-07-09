
| Element      |               Value property            |    Change callback          | New value in the callback |   
|--------------|:--------------------------------------: |----------------------------:| --------------------------|
| input type="text" |          value="string"           |         onChange            |      event.target.value   |
| input type="checkbox"   |    checked={boolean}     |              onChange          |          event.target.checked|
|input type="radio" |         checked={boolean}         |          onChange            |        event.target.checked|
| textarea |               value="string"          |            onChange                 |   event.target.value|
|select  |                   value="option value"      |           onChange           |         event.target.value|
