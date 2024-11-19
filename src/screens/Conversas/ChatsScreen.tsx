import {  FlatList } from 'react-native';
import React from 'react';
import chats from '../../data/chats.json';
import { ChatListItem } from "../../components/ChatListItem";

export function ChatsScreen() {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item}/>}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: 'white' }}
    />
  );
}

