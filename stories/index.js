import React, { Component } from 'react';
import EventsExample from './maps/events.stories';
import OtherLayersExample from './maps/other-layers.stories';
import SimpleExample  from './maps/simple.stories';
import TooltipExample from './maps/tooltip.stories';
import VectorLayersExample from './maps/vector-layers.stories';
import ViewportExample from './maps/viewport.stories';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Map', module)
 .add('A Simple Marker with Popup', () => (
    <SimpleExample />
 ))
 .add('Event Handling', () => (
     <EventsExample />
 ))
 .add('Viewport usage', () => (
    <ViewportExample />
 ))
 .add('Vector layers (Rectangle, Circle, etc)', () => (
     <VectorLayersExample />
 ))
 .add('Other layers (LayerGroup, FeatureGroup, etc)', () => (
     <OtherLayersExample />
 ))
 .add('Tooltips', () => (
     <TooltipExample />
 ));