const controller = {};

class Node {   
  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }
}
var a = []
 
class Tree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    add(value) {
        // arbol no tiene elementos
        if (this.isEmpty()) {
            this.root = new Node(value);
            return;
        }

        var aux = this.root;

        while (aux) {
            // vamos hacia la izquierda
            console.log(value.Departamento);

            if (value.Departamento < aux.value) {
                if (aux.left) {
                    aux = aux.left;
                }
                else {
                    aux.left = new Node(value);
                    return;
                }
            }
            else { // vamos hacia la derecha
                if (aux.right) {
                    aux = aux.right;
                }
                else {
                    aux.right = new Node(value);
                    return;
                }
            }
        }
    }
    addRecursive(value, node = this.root) {
        if (!node) {
            this.root = new Node(value);
            return;
        }

        if (value.Departamento.charCodeAt(0) > node.value.Departamento.charCodeAt(0)) {
            if (node.left) {
                return this.addRecursive(value, node.left);
            }
            node.left = new Node(value);
            return;
        }
        else { // vamos hacia la derecha
            if (node.right) {
                return this.addRecursive(value, node.right);
            }
            node.right = new Node(value);
            return;
        }
    }
    findDepa(value) {
        var count = 0;
        var aux = this.root;

        while (aux != null)  {
            // si encontramos el nodo con el valor
            if (aux.value.Departamento == value) {
                a.push(aux.value);
                if ((aux.left == null) && (aux.right == null)) {
                    break;
                }
                if ((aux.left != null) && (aux.right == null)) {
                    aux = aux.left;
                }
                else {
                    aux = aux.right;
                }
            }
            // seguimos buscando a la derecha
            if (aux.value.Departamento.charCodeAt(0) < value.charCodeAt(0)) {
                aux = aux.left;
            }
            else if (aux.value.Departamento.charCodeAt(0) > value.charCodeAt(0)) {
                // seguimos buscando a la izquierda
                aux = aux.right;
            }
        }
        // retornamos el nodo encontrado.
        // si no encontramos el nodo con el valor
        // aux, toma el valor null.
        return aux;
    }

    findPro(value) {
        var count = 0;
        var aux = this.root;

        while (aux) {
            // si encontramos el nodo con el valor
            if (aux.value.Problema == value) {
                a.push(aux.value);
                if ((aux.left == null) && (aux.right == null)) {
                    break;
                }
                if ((aux.left != null) && (aux.right == null)) {
                    aux = aux.left;
                }
                else {
                    aux = aux.right;
                }
            }
            // seguimos buscando a la derecha
            if (aux.value.Problema.charCodeAt(0) < value.charCodeAt(0)) {
                aux = aux.left;

            }
            else if (aux.value.Problema.charCodeAt(0) > value.charCodeAt(0)) {
                // seguimos buscando a la izquierda
                aux = aux.right;
            }
        }
        // retornamos el nodo encontrado.
        // si no encontramos el nodo con el valor
        // aux, toma el valor null.
        return aux;
    }

    findMun(value) {
        var count = 0;
        var aux = this.root;

        while (aux) {
            // si encontramos el nodo con el valor
            if (aux.value.Municipio == value) {
                a.push(aux.value);
                if ((aux.left == null) && (aux.right == null)) {
                    break;
                }
                if ((aux.left != null) && (aux.right == null)) {
                    aux = aux.left;
                }
                else {
                    aux = aux.right;
                }
            }
            // seguimos buscando a la derecha
            if (aux.value.Municipio.charCodeAt(0) < value.charCodeAt(0)) {
                aux = aux.left;

            }
            else if (aux.value.Municipio.charCodeAt(0) > value.charCodeAt(0)) {
                // seguimos buscando a la izquierda
                aux = aux.right;
            }
        }
        // retornamos el nodo encontrado.
        // si no encontramos el nodo con el valor
        // aux, toma el valor null.
        return aux;
    }

    findLoc (value) {
        var count = 0;
        var aux = this.root;

        while (aux) {
            // si encontramos el nodo con el valor
            if (aux.value.Localidad == value) {
                a.push(aux.value);
                if ((aux.left == null) && (aux.right == null)) {
                    break;
                }
                if ((aux.left != null) && (aux.right == null)) {
                    aux = aux.left;
                }
                else {
                    aux = aux.right;
                }
            }
            // seguimos buscando a la derecha
            if (aux.value.Localidad.charCodeAt(0) < value.charCodeAt(0)) {
                aux = aux.left;

            }
            else if (aux.value.Localidad.charCodeAt(0) > value.charCodeAt(0)) {
                // seguimos buscando a la izquierda
                aux = aux.right;
            }
        }
        // retornamos el nodo encontrado.
        // si no encontramos el nodo con el valor
        // aux, toma el valor null.
        return aux;
    }

    findFec (value) {
        var count = 0;
        var aux = this.root;

        while (aux) {
            // si encontramos el nodo con el valor
            if (aux.value.Fecha == value) {
                a.push(aux.value);
                if ((aux.left == null) && (aux.right == null)) {
                    break;
                }
                if ((aux.left != null) && (aux.right == null)) {
                    aux = aux.left;
                }
                else {
                    aux = aux.right;
                }
            }
            // seguimos buscando a la derecha
            if (aux.value.Fecha.charCodeAt(0) < value.charCodeAt(0)) {
                aux = aux.left;

            }
            else if (aux.value.Fecha.charCodeAt(0) > value.charCodeAt(0)) {
                // seguimos buscando a la izquierda
                aux = aux.right;
            }
        }
        // retornamos el nodo encontrado.
        // si no encontramos el nodo con el valor
        // aux, toma el valor null.
        return aux;
    }

    findEsc (value) {
        var count = 0;
        var aux = this.root;

        while (aux) {
            // si encontramos el nodo con el valor
            if (aux.value.EscalaPeligro == value) {
                a.push(aux.value);
                if ((aux.left == null) && (aux.right == null)) {
                    break;
                }
                if ((aux.left != null) && (aux.right == null)) {
                    aux = aux.left;
                }
                else {
                    aux = aux.right;
                }
            }
            // seguimos buscando a la derecha
            if (aux.value.EscalaPeligro < value) {
                aux = aux.left;

            }
            else if (aux.value.EscalaPeligro > value) {
                // seguimos buscando a la izquierda
                aux = aux.right;
            }
        }
        // retornamos el nodo encontrado.
        // si no encontramos el nodo con el valor
        // aux, toma el valor null.
        return aux;
    }

    print(node = this.root) {
        if (!node) {
            return;
        }
        this.print(node.left);
        console.log(node.value);
        this.print(node.right);
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

var tree = new Tree();



  ////////////////////////////////////////////////////////////
  

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

controller.inserts = (req,res) =>{
    res.render('Inserts');
}

 
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

controller.ordenDep = (req,res) =>{  

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes Order By Departamento desc',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
            /*a = [];
            
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
              tree.inOrder()*/

            res.render('OrdenDep',{
                data: reportes
            });
        });
    });
};


controller.ordenPro = (req,res) =>{  

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes Order By Problema desc',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
            /*a = [];
            
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
              tree.inOrder()*/

            res.render('OrdenDep',{
                data:reportes
            });
        });
    });
};


controller.ordenMun = (req,res) =>{  

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes Order By Municipio desc',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
            /*a = [];
            
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
              tree.inOrder()*/

            res.render('OrdenDep',{
                data:reportes
            });
        });
    });
};


controller.ordenLoc = (req,res) =>{  

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes Order By Localidad desc',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
            /*a = [];
            
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
              tree.inOrder()*/

            res.render('OrdenDep',{
                data:reportes
            });
        });
    });
};

controller.ordenFec = (req,res) =>{  

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes Order By Fecha desc',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
            /*a = [];
            
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
              tree.inOrder()*/

            res.render('OrdenDep',{
                data:reportes
            });
        });
    });
};

controller.ordenEsc = (req,res) =>{  

    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes Order By EscalaPeligro desc',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
            /*a = [];
            
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
              tree.inOrder()*/

            res.render('OrdenDep',{
                data:reportes
            });
        });
    });
};


/////////////////////////////////////////////////////// 

controller.buscarDep = (req,res) =>{
  const r = req.body;
  req.getConnection((err,conn)=>{
    console.log(r);
        

     conn.query('SELECT * FROM reportes where Departamento = ?',[r.Departamento],(err,reportes)=>{
        console.log(reportes);
        if(err){
            res.json(err);
        }
        a = [];    
               
        for (var i = 0; i < reportes.length; i++) {
          tree.addRecursive(reportes[i])
          
        }
        tree.findDepa(r.Departamento);
        res.render('Buscar',{
        arra: reportes
        });
 
      });
  });
};

controller.buscarPro = (req,res) =>{

    const r = req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where Problema = ?',[r.Problema],(err,reportes)=>{
          console.log(reportes);
            if(err){
                res.json(err);
            }
              a = []        
              
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
  
              tree.findPro(r.Problema)           
  
          res.render('BuscarPro',{
            arra: reportes
          });
          
        });
    });
  };

  controller.buscarMun = (req,res) =>{
  
    const r = req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where Municipio = ?',[r.Municipio],(err,reportes)=>{
          console.log(reportes);
            if(err){
                res.json(err);
            }
              a = []        
              
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
  
              tree.findMun(r.Municipio)           
  
          res.render('BuscarMun',{
            arra: reportes
          });
          
        });
    });
  };

  controller.buscarFec = (req,res) =>{
   
    const r = req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where Fecha = ?',[r.Fecha],(err,reportes)=>{
          console.log(reportes);
            if(err){
                res.json(err);
            }
              a = []        
              
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
  
              tree.findFec(r.Fecha)           
  
          res.render('BuscarFec',{
            arra: reportes
          });
          
        });
    });
  };

  controller.buscarLoc = (req,res) =>{
    
    const r = req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where Localidad = ?',[r.Localidad],(err,reportes)=>{
          console.log(reportes);
            if(err){
                res.json(err);
            }
              a = []        
              
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
  
              tree.findLoc(r.Localidad)           
  
          res.render('BuscarLoc',{
            arra: reportes
          });
          
        });
    });
  };

  controller.buscarEsc = (req,res) =>{
  
    const r = req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where EscalaPeligro = ?',[r.EscalaPeligro],(err,reportes)=>{
          console.log(reportes);
            if(err){
                res.json(err);
            }
              a = []        
              
              for (var i = 0; i < reportes.length; i++) {
                tree.addRecursive(reportes[i])
                
              }
  
              tree.findEsc(r.EscalaPeligro)           
  
          res.render('BuscarEsc',{
            arra: reportes
          });
          
        });
    });
  };


controller.buscar_inicialDep = (req,res) =>{
  
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

controller.buscar_inicialMun = (req,res) =>{
  
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where Municipio = null',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
  
            res.render('BuscarMun',{
              arra: reportes
          });
        });
    });
  };

  controller.buscar_inicialPro = (req,res) =>{
  
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where Problema = null',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
  
            res.render('BuscarPro',{
              arra: reportes
          });
        });
    });
  };

  controller.buscar_inicialLoc = (req,res) =>{
  
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where Localidad = null',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
  
            res.render('BuscarLoc',{
              arra: reportes
          });
        });
    });
  };

  controller.buscar_inicialFec = (req,res) =>{
  
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where Fecha = null',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
  
            res.render('BuscarFec',{
              arra: reportes
          });
        });
    });
  };

  controller.buscar_inicialEsc = (req,res) =>{
  
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM reportes where EscalaPeligro = null',(err,reportes)=>{
            
            if(err){
                res.json(err);
            }
  
            res.render('BuscarEsc',{
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