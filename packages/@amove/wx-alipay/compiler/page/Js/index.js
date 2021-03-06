const path = require('path')
const { useReducer } = require('@amove/next')
const fs = require('fs-extra')

useReducer({
  PageJs(node, store) {
    const output
            = `${path.join(store.config.output, node.body._node.projectPath)}.js`
    this.$node.content = fs.readFileSync(
      `${node.body._node.path}.js`,
      'utf8',
    )
    this.$node.dist = output
    this.$node.projectPath = `${node.body._node.projectPath}.js`
    this.$node.originCode = this.$node.content
    this.addChild('processComponentIs')
    this.addChild('MiniApplication')
    this.addChild({
      type: 'ProcessBabel',
      key: `${node.path}ProcessBabel`,
      path: node.path,
      body: node.body,
      dist: output,
    })
  },
})
