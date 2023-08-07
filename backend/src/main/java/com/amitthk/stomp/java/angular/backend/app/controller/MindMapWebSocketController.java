package com.amitthk.stomp.java.angular.backend.app.controller;

import com.amitthk.stomp.java.angular.backend.app.model.MindMapNode;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MindMapWebSocketController {

    @MessageMapping("/add-node")
    @SendTo("/topic/add-node")
    public MindMapNode addNode(@Payload MindMapNode node) {
        // Handle adding the node to the mind map and return the updated node
        // You can also broadcast the updated mind map to all connected clients
        return node;
    }

    // Implement similar methods for handling delete, update, and move events
}
