# scratchblocks-3.0

## How To Build

### Dependencies
* Node.js

### Instructions

1. Install project dependencies by opening a Command Prompt or Terminal in the project directory and running the command:
```bash
npm install
```
2. Build the project by running:
```bash
npm run build
```

## Usage

_Note: There is an example HTML file in the ```build``` directory_

1. Add ```bundle.js``` and ```media``` to your site's root and in your HTML file add this to the head:
```html
<script src="bundle.js"></script>
```
2. To add blocks to your site, add their Blockly XML to your site, and give it a classname of ```scratchblocks```, this will be replaced with an SVG cointaining your blocks.

### Example Site

```html
<script src="bundle.js"></script>
<xml class="scratchblocks">
  <block type="event_whenflagclicked" id="]ZmMz.1qS[ukY.0m-43`" x="244" y="236">
    <next>
      <block type="control_forever" id="+CF8cus2/p^fXklnqacp">
        <statement name="SUBSTACK">
          <block type="motion_movesteps" id="u)b$_,#K6~!0.{Kkbfx/">
            <value name="STEPS">
              <shadow type="math_number" id="3+Cf*aU[Qqbg;/k!|+eB">
                <field name="NUM">10</field>
              </shadow>
            </value>
          </block>
        </statement>
      </block>
    </next>
  </block>
</xml>
```
