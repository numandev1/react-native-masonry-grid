import React, { ReactElement, memo, forwardRef } from 'react';
import {
  NativeScrollEvent,
  RefreshControlProps,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';

interface Props extends ScrollViewProps {
  numColumns?: number;
  columnWrapperStyle: StyleProp<ViewStyle>;
  ListHeaderComponent?: React.ReactNode | React.ReactElement | null;
  ListEmptyComponent?: typeof React.Fragment | React.ReactElement | null;
  ListFooterComponent?: React.ReactNode | React.ReactElement | null;
  ListHeaderComponentStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  onRefresh?: RefreshControlProps['onRefresh'];
  onEndReached?: () => void;
  keyExtractor?: ((item: any, index: number) => string) | undefined;
  onEndReachedThreshold?: number;
  style?: StyleProp<ViewStyle>;
  data: any[];
  renderItem: ({ item, index }: { item: any; index: number }) => ReactElement;
  LoadingView?: React.ReactNode | React.ReactElement | null;
}

const MasonryFlatlist = forwardRef(
  (
    {
      columnWrapperStyle,
      data,
      ListHeaderComponent,
      ListEmptyComponent,
      ListFooterComponent,
      ListHeaderComponentStyle,
      containerStyle,
      contentContainerStyle,
      renderItem,
      onEndReachedThreshold,
      onEndReached,
      loading,
      LoadingView,
      numColumns = 2,
      horizontal,
      onScroll,
      removeClippedSubviews = false,
      keyExtractor,
      style,
      ...rest
    }: Props,
    ref?: any
  ): ReactElement => {
    return (
      <ScrollView
        {...rest}
        ref={ref}
        style={[styles.scrollView, containerStyle]}
        contentContainerStyle={contentContainerStyle}
        removeClippedSubviews={removeClippedSubviews}
        scrollEventThrottle={16}
        onScroll={(e) => {
          const nativeEvent: NativeScrollEvent = e.nativeEvent;
          if (isCloseToBottom(nativeEvent, onEndReachedThreshold || 0.0)) {
            onEndReached?.();
          }

          onScroll?.(e);
        }}
      >
        <>
          <View style={ListHeaderComponentStyle}>{ListHeaderComponent}</View>
          {data.length === 0 && ListEmptyComponent ? (
            React.isValidElement(ListEmptyComponent) ? (
              ListEmptyComponent
            ) : (
              <ListEmptyComponent />
            )
          ) : (
            <View
              style={[
                {
                  flex: 1,
                  flexDirection: horizontal ? 'column' : 'row',
                },
                style,
              ]}
            >
              {Array.from(Array(numColumns), (_, num) => {
                return (
                  <View
                    key={`masonry-flatlistcolumn-${num}`}
                    style={{
                      flex: 1 / numColumns,
                      flexDirection: horizontal ? 'row' : 'column',
                    }}
                  >
                    {data
                      .map((el, i) => {
                        if (i % numColumns === num) {
                          return (
                            <View
                              key={
                                keyExtractor?.(el, i) ||
                                `masonry-flatlistrow-${num}-${i}`
                              }
                              style={columnWrapperStyle}
                            >
                              {renderItem({ item: el, index: i })}
                            </View>
                          );
                        }

                        return null;
                      })
                      .filter((e) => !!e)}
                  </View>
                );
              })}
            </View>
          )}
          {loading && LoadingView}
          {ListFooterComponent}
        </>
      </ScrollView>
    );
  }
);

const isCloseToBottom = (
  { layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent,
  onEndReachedThreshold: number
): boolean => {
  const paddingToBottom = contentSize.height * onEndReachedThreshold;

  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export default memo(MasonryFlatlist);

const styles = StyleSheet.create({
  scrollView: { flex: 1, alignSelf: 'stretch' },
});
