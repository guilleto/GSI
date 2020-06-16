const controller = {};

controller.list = (req, res) => {

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }

            res.render('customer',{
                data:reportes
            });
        });
    });
};



 
controller.save = (req,res) =>{
    const data = req.body;
    req.getConnection((err,conn) => {
    conn.query('INSERT INTO reportes set ?',[data],(err,rows) =>{
        res.redirect('/');
        
    });
});
};

controller.edit = (req,res) =>{
    const {problem_id} = req.params;
    req.getConnection((err,conn)=>{
       conn.query('SELECT * FROM reportes WHERE problem_id= ?',[problem_id],(err,rows) => {
        res.render('customer_edit',{
            data:rows[0]
        });
       }) ;
    });
};


/// organizar por departamento

controller.orden = (req,res) =>{

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }


            //arbol 

            class Node {
                constructor (value) {
                  this.value = value
                  this.right = null
                  this.left = null
                }
              }
              
            
              class Tree {
                constructor () {
                  this.root = null
                }
              
                isEmpty () {
                  return this.root === null
                }
              
                add (value) {
                  // arbol no tiene elementos
                  if (this.isEmpty()) {
                    this.root = new Node(value)
                    return
                  }
              
                  var aux = this.root
              
                  while (aux) {
                    // vamos hacia la izquierda
                    console.log(value.Departamento);
                    
                    if (value.Departamento < aux.value) {
                      if (aux.left) {
                        aux = aux.left
                      } else {
                        aux.left = new Node(value)
                        return
                      }
                    } else { // vamos hacia la derecha
                      if (aux.right) {
                        aux = aux.right
                      } else {
                        aux.right = new Node(value)
                        return
                      }
                    }
                  }
                }
            
                addRecursive (value, node = this.root) {
                  if (!node) {
                    this.root = new Node(value)
                    return
                  }
              
                  if (value.Departamento.charCodeAt(0) < node.value.Departamento.charCodeAt(0)) {
                    if (node.left) {
                      return this.addRecursive(value, node.left)
                    }
                    node.left = new Node(value)
                    return
                  } else { // vamos hacia la derecha
                    if (node.right) {
                      return this.addRecursive(value, node.right)
                    }
                    node.right = new Node(value)
                    return
                  }
                }
    
                inOrder (node = this.root) {
                  if (!node) {
                    return
                  }
                  this.inOrder(node.left)
                  a.push(node.value)
                  this.inOrder(node.right)
                }
               
              }


              var t = new Tree()

              var a = []
            console.log(reportes);
            
              for (var i = 0; i < reportes.length; i++) {
                t.addRecursive(reportes[i])
                
              }
              t.inOrder()

            res.render('Orden',{

                data:a
            });
        });
    });
};




controller.buscar = (req,res) =>{
  const r = req.body;


  
  req.getConnection((err,conn)=>{
      conn.query('SELECT * FROM reportes where Departamento = ?',[r.Departamento],(err,reportes)=>{
        console.log(reportes);
          if(err){
              res.json(err);
          }

          //arbol 

          class Node {
              constructor (value) {
                this.value = value
                this.right = null
                this.left = null
              }
            }
            
          
            class Tree {
              constructor () {
                this.root = null
              }
            
              isEmpty () {
                return this.root === null
              }
            
              add (value) {
                // arbol no tiene elementos
                if (this.isEmpty()) {
                  this.root = new Node(value)
                  return
                }
            
                var aux = this.root
            
                while (aux) {
                  // vamos hacia la izquierda
                  console.log(value.Departamento);
                  
                  if (value.Departamento < aux.value) {
                    if (aux.left) {
                      aux = aux.left
                    } else {
                      aux.left = new Node(value)
                      return
                    }
                  } else { // vamos hacia la derecha
                    if (aux.right) {
                      aux = aux.right
                    } else {
                      aux.right = new Node(value)
                      return
                    }
                  }
                }
              }
          
              addRecursive (value, node = this.root) {
                if (!node) {
                  this.root = new Node(value)
                  return
                }
            
                if (value.Departamento.charCodeAt(0) > node.value.Departamento.charCodeAt(0)) {
                  if (node.left) {
                    return this.addRecursive(value, node.left)
                  }
                  node.left = new Node(value)
                  return
                } else { // vamos hacia la derecha
                  if (node.right) {
                    return this.addRecursive(value, node.right)
                  }
                  node.right = new Node(value)
                  return
                }
              }

              find (value) {
                
                var count = 0;
                var aux = this.root
            
             
               
/*
                if (mayorque(aux.value.Departamento,value)) {
                  a.push(aux.value)
                  return aux
                }
            
            */
            
                
                while(aux) {
                  // si encontramos el nodo con el valor
        
                

                  if (aux.value.Departamento == value) {
                    a.push(aux.value)
                      if((aux.left==null)&&(aux.right==null)){
                        break
                      }
                      if ((aux.left!=null)&&(aux.right==null)) {
                        aux=aux.left;
                      } else {
                        aux=aux.right;
                      }
                  }
                  // seguimos buscando a la derecha
                  if (aux.value.Departamento.charCodeAt(0)< value.charCodeAt(0)) {
                    aux = aux.left
                    
                  } else if (aux.value.Departamento.charCodeAt(0) > value.charCodeAt(0)) {
                    // seguimos buscando a la izquierda
                    aux = aux.right
                  }
                }
                // retornamos el nodo encontrado.
                // si no encontramos el nodo con el valor
                // aux, toma el valor null.
               
                return aux
              }
  
              print (node = this.root) {
                if (!node) {
                  return
                }
                this.print(node.left)
                console.log(node.value)
                this.print(node.right)
              }
             
            }

          

            var t = new Tree()

            var a = []
         
         
            
            for (var i = 0; i < reportes.length; i++) {
              t.addRecursive(reportes[i])
              
            }

            t.find(r.Departamento)
          
            

        res.render('Buscar',{
          arra: reportes
        });
        
      });
  });
};



controller.buscar_inicial = (req,res) =>{
  
  req.getConnection((err,conn)=>{
      conn.query('SELECT * FROM reportes where Departamento = null',(err,reportes)=>{
          
          if(err){
              res.json(err);
          }

          res.render('Buscar',{
            arra: reportes
        });
      });
  });
};




controller.update = (req,res) => {
    const {problem_id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE reportes set ? WHERE problem_id= ?',[newCustomer,problem_id],(err,rows)=>{
            res.redirect('/');
        })
    });
};



controller.delete = (req,res) =>{
    const {problem_id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM reportes WHERE problem_id = ?',[problem_id],(err,rows)=>{
            res.redirect('/');
        });
    })
};

module.exports = controller;