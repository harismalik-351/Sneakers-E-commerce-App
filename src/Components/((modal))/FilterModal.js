import {StyleSheet, Text, View} from 'react-native';
import React, {forwardRef} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {EnvelopeOpenIcon} from 'react-native-heroicons/outline';
import {theme} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const FilterModal = forwardRef((props, ref) => {
  const navigation = useNavigation();
  const points = React.useMemo(() => ['40%'], []);
  const renderBackdrop = React.useCallback(
    props => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={points}
      backdropComponent={renderBackdrop}
      // set `detached` to true
      style={styles.sheetContainer}>
      <View style={styles.contentContainer}>
        <View
          style={{backgroundColor: theme.primery}}
          className="rounded-full p-5 my-5">
          <EnvelopeOpenIcon color={theme.backgroundColor} size={'30'} />
        </View>
        <View className="items-center ">
          <Text
            style={{fontSize: 20, color: theme.darkColor}}
            className=" text-center font-bold tracking-wide">
            Check Your Email
          </Text>
          <Text
            style={{color: theme.secondaryDark}}
            className="text-center text-sm font-semibold tracking-wide">
            We Have Send Password Recovery {'\n'} Code In Your Email
          </Text>
        </View>
      </View>
    </BottomSheetModal>
  );
});

export default FilterModal;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
