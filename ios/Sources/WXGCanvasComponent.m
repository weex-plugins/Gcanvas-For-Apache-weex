/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

#import "WXGCanvasComponent.h"
#import <GLKit/GLKit.h>
#import <GCanvas/GCVCommon.h>
#import <WeexPluginLoader/WeexPluginLoader.h>
#import "WeexGcanvas.h"

@interface WXGCanvasComponent()

@property(nonatomic, assign) CGRect frame;
@property(nonatomic, assign) BOOL isUnLoad;
@end

@implementation WXGCanvasComponent

//WX_PlUGIN_EXPORT_COMPONENT(gcanvas,WXGCanvasComponent, 1.0)
WX_PlUGIN_EXPORT_COMPONENT(gcanvas,WXGCanvasComponent)


/**
 *  @abstract Initializes a new component using the specified  properties.
 *
 *  @param ref          the identity string of component
 *  @param type         component type
 *  @param styles       component's styles
 *  @param attributes   component's attributes
 *  @param events       component's events
 *  @param weexInstance the weexInstance with which the component associated
 *
 *  @return A WXComponent instance.
 */
- (instancetype)initWithRef:(NSString *)ref
                       type:(NSString*)type
                     styles:(nullable NSDictionary *)styles
                 attributes:(nullable NSDictionary *)attributes
                     events:(nullable NSArray *)events
               weexInstance:(WXSDKInstance *)weexInstance{
    GCVLOG_METHOD(@"ref=%@, type=%@, styles=%@, attributes=%@, events=%@, weexInstance=%@", ref, type, styles, attributes, events, weexInstance)
    self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance];
    if (self )
    {
        CGPoint origin = [[UIScreen mainScreen] bounds].origin;
        CGSize size = [[UIScreen mainScreen] bounds].size;
        
        if (styles[@"left"])
        {
            origin.x = [styles[@"left"] floatValue];
        }
        
        if (styles[@"top"])
        {
            origin.y = [styles[@"top"] floatValue];
        }
        
        if (styles[@"width"])
        {
            size.width = [styles[@"width"] floatValue];
        }
        
        if (styles[@"height"])
        {
            size.height = [styles[@"height"] floatValue];
        }
        
        self.frame = CGRectMake(origin.x, origin.y, size.width, size.height);
        self.componetFrame = self.frame;
    }
    
    return self;
}


- (void)dealloc
{
    [EAGLContext setCurrentContext:nil];
    self.renderCallBack = nil;
}

-(void)viewDidLoad
{
    [super viewDidLoad];
    if(self.renderCallBack){
        self.renderCallBack();
    }
}

- (UIView *)loadView
{
    if(!self.glkview){
        GLKView *glkview = [[GLKView alloc] initWithFrame:self.frame];
        glkview.enableSetNeedsDisplay = YES;
        glkview.userInteractionEnabled = YES;
        glkview.drawableDepthFormat = GLKViewDrawableDepthFormat24;
        glkview.backgroundColor = [UIColor clearColor];
        
        self.glkview  = glkview;
        
        [[NSNotificationCenter defaultCenter] postNotificationName:KGCanvasCompLoadedNotificationName
                                                            object:nil
                                                          userInfo:@{@"componentId":self.ref}];
    }
    
    return self.glkview;
}

@end
