package com.thetable;

import android.util.Log;

import com.facebook.react.ReactActivity;
import com.google.firebase.iid.FirebaseInstanceId;

import static android.content.ContentValues.TAG;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "TheTable";
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d(TAG, "FBID: " + FirebaseInstanceId.getInstance().getToken());
    }
}
