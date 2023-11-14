package gestionarxml;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class LeerXML {
        public void mostrarLibros(Document doc) {
        Element root = doc.getDocumentElement();
        NodeList builds = root.getChildNodes();
        Node build = builds.item(0);
    }
}
