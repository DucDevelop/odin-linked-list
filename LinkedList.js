export default function createLinkedList() {
    let head = null
    let tail = null
    let size = 0

    return {
       
        get size() {
            return size
        },
        get tail() {
            return tail
        },
        get head() {
            return head
        },

        append(value) {
            const node = createNode()
            node.value = value
            if(head == null) {
                head = node
                tail = node
            } else {
                let tmpNode = head;
                while(tmpNode.nextNode) {
                    tmpNode = tmpNode.nextNode
                }
                tmpNode.nextNode = node
                tail = node
            }
            size = size + 1
        },
        
        prepend(value) {
            const node = createNode()
            node.value = value
            if(head == null) {
                head = node
                tail = node
            } else {
                node.nextNode = head
                head = node
            }
            size = size + 1
        },
    
        at(index) {
            let node = null
            if(!Number.isInteger(index)) {
                return null
            }
            if(index >= 0) {
                node = head
            }
            for(let i=0; i < index; i++) {
                if(node.nextNode) {
                    node = node.nextNode
                }
                else {
                    return null
                }
            }
            return node;
        },
    
        pop() {
    
    
            if (size === 1) {
                head = null
                tail = null
                size = 0
            }
            else {
    
                let tmpNode = head;
    
                while(tmpNode.nextNode.nextNode) {
                    tmpNode = tmpNode.nextNode
                }
                tail = tmpNode
                tmpNode.nextNode = null
                size = size - 1
            }
        },
    
        contains(val) {
            let tmpNode = head
            while(tmpNode) {
                if(tmpNode.value === val) {
                    return true
                }
                tmpNode = tmpNode.nextNode
            }
            return false
        },
    
        find(val) {
            let result = 0
            let tmpNode = head
            while(tmpNode) {
                if(tmpNode.value === val) {
                    return result
                }
                tmpNode = tmpNode.nextNode
                result = result + 1
            }
            return null
        },
    
        toString() {
            let tmpNode = head
            let result = ""
            while(tmpNode) {
                result = `${result}( ${tmpNode.value} ) -> `
                tmpNode = tmpNode.nextNode
            }
            return `${result}null`
        },

        insertAt(value, index) {
            const newNode = createNode()
            newNode.value = value
            if(index > size) {
                throw new Error("No element existing that points to index " + index)
            }
            if (index === 0) {
                newNode.nextNode = head
                head = newNode
            } else {
                let precessor = this.at(index - 1);
                newNode.nextNode = precessor.nextNode
                if(newNode.nextNode == null) {
                    tail = newNode
                }
                precessor.nextNode = newNode
            }
            size = size + 1
        },

        removeAt(index) {
            if(index > size -1 ) {
                throw new Error("No element existing at index " + index)
            }
            // special case head
            if (index === 0) {
                head = head.nextNode
            } else {
                let currentNode = this.at(index);
                let precessor = this.at(index - 1);
                precessor.nextNode = currentNode.nextNode
                if(precessor.nextNode == null) {
                    tail = precessor
                }
            }
            size = size - 1
        }


    
    }
}


function createNode() {
    return {
        value: null,
        nextNode: null,
    }
}