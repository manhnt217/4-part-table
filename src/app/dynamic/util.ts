import { ViewContainerRef, Component, ComponentFactoryResolver, Type, ReflectiveInjector, ResolvedReflectiveFactory, ComponentRef } from "@angular/core";

export class Util {
    static showPopup(placeholder: ViewContainerRef, component: Type<any>, resolver: ComponentFactoryResolver): ComponentRef<any> {
        const factory = resolver.resolveComponentFactory(component);
        placeholder.clear();
        return placeholder.createComponent(factory);
    }
}
